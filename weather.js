#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log("init", args);
  if (args.h) {
    return printHelp();
  }
};

initCLI();
