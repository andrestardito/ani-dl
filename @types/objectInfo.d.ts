// Generated by https://quicktype.io

export interface ObjectInfo {
  total: number;
  items:  CrunchyObject[];
  meta:  Record<unknown>;
}

export interface CrunchyObject {
  __links__:               Links;
  channel_id:              string;
  slug:                    string;
  images:                  Images;
  linked_resource_key:     string;
  description:             string;
  promo_description:       string;
  external_id:             string;
  title:                   string;
  series_metadata?:        SeriesMetadata;
  id:                      string;
  slug_title:              string;
  type:                    string;
  promo_title:             string;
  movie_listing_metadata?: MovieListingMetadata;
  movie_metadata?:         MovieMetadata;
  playback?:               string;
  episode_metadata?:       EpisodeMetadata;
  streams_link?:           string;
  season_metadata?:        SeasonMetadata;
  isSelected?:             boolean;
  f_num:                   string;
  s_num:                   string;
}

export interface EpisodeMetadata {
  audio_locale:              Locale;
  availability_ends:         Date;
  availability_notes:        string;
  availability_starts:       Date;
  available_date:            null;
  available_offline:         boolean;
  closed_captions_available: boolean;
  duration_ms:               number;
  eligible_region:           string;
  episode:                   string;
  episode_air_date:          Date;
  episode_number:            number;
  extended_maturity_rating:  Record<unknown>;
  free_available_date:       Date;
  identifier:                string;
  is_clip:                   boolean;
  is_dubbed:                 boolean;
  is_mature:                 boolean;
  is_premium_only:           boolean;
  is_subbed:                 boolean;
  mature_blocked:            boolean;
  maturity_ratings:          string[];
  premium_available_date:    Date;
  premium_date:              null;
  season_id:                 string;
  season_number:             number;
  season_slug_title:         string;
  season_title:              string;
  sequence_number:           number;
  series_id:                 string;
  series_slug_title:         string;
  series_title:              string;
  subtitle_locales:          Locale[];
  tenant_categories?:        string[];
  upload_date:               Date;
  versions:                  EpisodeMetadataVersion[];
}

export interface Links {
  'resource/channel':     EpisodeChannel;
  'resource':             EpisodeChannel;
  'episode/season':       EpisodeChannel;
  'episode/series':       EpisodeChannel;
  streams:                EpisodeChannel;
}

export interface EpisodeChannel {
  href: string;
}

export interface EpisodeMetadataVersion {
  audio_locale:    Locale;
  guid:            string;
  is_premium_only: boolean;
  media_guid:      string;
  original:        boolean;
  season_guid:     string;
  variant:         string;
}

export interface Images {
  poster_tall?: Array<Image[]>;
  poster_wide?: Array<Image[]>;
  promo_image?: Array<Image[]>;
  thumbnail?:   Array<Image[]>;
}

export interface Image {
  height: number;
  source: string;
  type:   ImageType;
  width:  number;
}

export enum ImageType {
  PosterTall = 'poster_tall',
  PosterWide = 'poster_wide',
  PromoImage = 'promo_image',
  Thumbnail = 'thumbnail',
}

export interface MovieListingMetadata {
  availability_notes:       string;
  available_date:           null;
  available_offline:        boolean;
  duration_ms:              number;
  extended_description:     string;
  extended_maturity_rating: Record<unknown>;
  first_movie_id:           string;
  free_available_date:      Date;
  is_dubbed:                boolean;
  is_mature:                boolean;
  is_premium_only:          boolean;
  is_subbed:                boolean;
  mature_blocked:           boolean;
  maturity_ratings:         string[];
  movie_release_year:       number;
  premium_available_date:   Date;
  premium_date:             null;
  subtitle_locales:         Locale[];
  tenant_categories:        string[];
}

export interface MovieMetadata {
  availability_notes:        string;
  available_offline:         boolean;
  closed_captions_available: boolean;
  duration_ms:               number;
  extended_maturity_rating:  Record<unknown>;
  is_dubbed:                 boolean;
  is_mature:                 boolean;
  is_premium_only:           boolean;
  is_subbed:                 boolean;
  mature_blocked:            boolean;
  maturity_ratings:          string[];
  movie_listing_id:          string;
  movie_listing_slug_title:  string; 
  movie_listing_title:       string;
}

export interface SeasonMetadata {
  audio_locale:             Locale;
  audio_locales:            Locale[];
  extended_maturity_rating: Record<unknown>;
  identifier:               string;
  is_mature:                boolean;
  mature_blocked:           boolean;
  maturity_ratings:         string[];
  season_display_number:    string;
  season_sequence_number:   number;
  subtitle_locales:         Locale[];
  versions:                 SeasonMetadataVersion[];
}

export interface SeasonMetadataVersion {
  audio_locale: Locale;
  guid:         string;
  original:     boolean;
  variant:      string;
}
export interface SeriesMetadata {
  audio_locales:            Locale[];
  availability_notes:       string;
  episode_count:            number;
  extended_description:     string;
  extended_maturity_rating: Record<unknown>;
  is_dubbed:                boolean;
  is_mature:                boolean;
  is_simulcast:             boolean;
  is_subbed:                boolean;
  mature_blocked:           boolean;
  maturity_ratings:         string[];
  season_count:             number;
  series_launch_year:       number;
  subtitle_locales:         Locale[];
  tenant_categories?:       string[];
}

export enum Locale {
  enUS = 'en-US',
  esLA = 'es-LA',
  es419 = 'es-419',
  esES = 'es-ES',
  ptBR = 'pt-BR',
  frFR = 'fr-FR',
  deDE = 'de-DE',
  arME = 'ar-ME',
  arSA = 'ar-SA',
  itIT = 'it-IT',
  ruRU = 'ru-RU',
  trTR = 'tr-TR',
  hiIN = 'hi-IN',
  zhCN = 'zh-CN',
  koKR = 'ko-KR',
  jaJP = 'ja-JP',
}