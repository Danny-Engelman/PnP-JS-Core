"use strict";

import { Util } from "./utils/Util";
import { PnPClientStorage } from "./utils/Storage";
import { Settings } from "./configuration/configuration";
import { Logger } from "./utils/logging";
import { Rest } from "./SharePoint/Rest/rest";

/**
 * Root class of the Patterns and Practices namespace, provides an entry point to the library
 */

/**
 * Utility methods
 */
export const util = Util;

/**
 * Provides access to the REST interface
 */
export const sp = new Rest();

/**
 * Provides access to local and session storage
 */
export const storage: PnPClientStorage = new PnPClientStorage();

/**
 * Global configuration instance to which providers can be added
 */
export const config = new Settings();

/**
 * Global logging instance to which subscribers can be registered and messages written
 */
export const log = Logger;

/**
 * Enables use of the import pnp from syntax
 */
export default {
    /**
     * Global configuration instance to which providers can be added
     */
    config: config,
    /**
     * Global logging instance to which subscribers can be registered and messages written
     */
    log: log,
    /**
     * Provides access to the REST interface
     */
    sp: sp,
    /**
     * Provides access to local and session storage
     */
    storage: storage,
    /**
     * Utility methods
     */
    util: util,
}
