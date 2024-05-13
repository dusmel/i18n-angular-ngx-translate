import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

export class MissingTranslationHelper implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
     console.log('************ here *********', params.key);
    if (params.interpolateParams) {
      return "missingKey"
    }
    return "missingKey"
  }
}