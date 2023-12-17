import fs from 'fs';
import path from 'path';
import { workingDir } from './module.cfg-loader';
import log4js from 'log4js';

const logFolder = path.join(workingDir, 'logs');
const latest = path.join(logFolder, 'latest.log');

const makeLogFolder = () => {
  if (!fs.existsSync(logFolder))
    fs.mkdirSync(logFolder);
  if (fs.existsSync(latest)) {
    const stats = fs.statSync(latest);
    fs.renameSync(latest, path.join(logFolder, `${stats.mtimeMs}.log`));
  }
};

const makeLogger = () => {
  makeLogFolder();
  log4js.configure({
    appenders: {
      console: { 
        type: 'console', layout: {
          type: 'pattern',
          pattern: process.env.isGUI === 'true' ? '%[%x{info}%m%]' : '%x{info}%m',
          tokens: {
            info: (ev) => {
              return ev.level.levelStr === 'INFO' ? '' : `[${ev.level.levelStr}] `;
            }
          }
        } 
      },
      file: {
        type: 'file',
        filename: latest,
        layout: {
          type: 'pattern',
          pattern: '%x{info}%m',
          tokens: {
            info: (ev) => {
              return ev.level.levelStr === 'INFO' ? '' : `[${ev.level.levelStr}] `;
            }
          }
        }
      }
    },
    categories: {
      default: {
        appenders: ['console', 'file'],
        level: 'all',
      }
    }
  });
};

const getLogger = () => {
  if (!log4js.isConfigured())
    makeLogger();
  return log4js.getLogger();
};

export const console = getLogger();