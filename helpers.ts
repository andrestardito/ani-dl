import { CrunchyAndroidStreams, Subtitle, Streams, Version } from './@types/crunchyAndroidStreams';
import { PlaybackData, Subtitles, Version as VersionP } from './@types/playbackData';


export function convertPlaybackDataToCrunchyAndroidStreams(playbackData: PlaybackData): CrunchyAndroidStreams {
  const crunchyAndroidStreams: CrunchyAndroidStreams = {
    __class__: 'PlaybackData', // Puedes ajustar esto según tus necesidades
    __href__: '', // Puedes ajustar esto según tus necesidades
    __resource_key__: '', // Puedes ajustar esto según tus necesidades
    __links__: {
      resource: {
        href: '', // Puedes ajustar esto según tus necesidades
      },
    },
    __actions__: {}, // Puedes ajustar esto según tus necesidades
    media_id: playbackData.meta.media_id,
    audio_locale: playbackData.meta.audio_locale,
    subtitles: convertSubtitles(playbackData.meta.subtitles),
    closed_captions: {}, // Puedes ajustar esto según tus necesidades
    streams: convertStreams(playbackData.data),
    bifs: playbackData.meta.bifs,
    versions: playbackData.meta.versions?.map(convertVersion),
    captions: {}, // Puedes ajustar esto según tus necesidades
  };

  return crunchyAndroidStreams;
}

function convertSubtitles(subtitles: Subtitles): { [key: string]: Subtitle } {
  const result: { [key: string]: Subtitle } = {};

  for (const key in subtitles) {
    const subtitleInfo = subtitles[key as keyof Subtitles];
    if (subtitleInfo) {
      result[key] = {
        locale: subtitleInfo.locale,
        url: subtitleInfo.url,
        format: subtitleInfo.format,
      };
    }

  }

  return result;
}


function convertStreams(data: PlaybackData['data']): Streams {
  const result: Streams = {};

  for (const item of data) {
    for (const key in item) {
      result[key] = {};

      for (const locale in item[key]) {
        result[key][locale] = {
          hardsub_locale: item[key][locale].hardsub_locale,
          hardsub_lang:   item[key][locale].hardsub_lang,
          url:            item[key][locale].url,
        };
      }
    }
  }

  return result;
}

function convertVersion(version: VersionP): Version {
  return {
    audio_locale: version.audio_locale.toString(),
    guid: version.guid,
    original: version.original,
    variant: version.variant,
    season_guid: version.season_guid,
    media_guid: version.media_guid,
    is_premium_only: version.is_premium_only,
  };
}