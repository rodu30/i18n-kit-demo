# i18n-kit-demo

This is a basic [Create React App](https://github.com/facebookincubator/create-react-app) project to
demonstrate the usage of the [**i18n-kit**](https://github.com/rodu30/i18n-kit) and
[**i18n-cli**](https://github.com/rodu30/i18n-cli). See READMEs for more details.

## Getting started

Clone repository and `npm install` packages.

Then in order to start the app do `npm run start` and the home page of the app will appear automatically in your browser at 'localhost:3000'.

## CLI

To run a i18n-cli command open another shell at the same path.

You can use the cli with pre-defined arguments and options as npm scripts like that (used in the examples below):

```bash
$ npm run messages:<command>
```

If you want to use the CLI directly you can either use it with command `node_modules/.bin/i18n` from within the project or install it globally in order to just use `i18n` command:

```bash
$ cd node_modules/i18n-cli && npm install -g
```

## Usage

This demo has some example steps implemented in order to see the Translation Pipeline in action.

> Note: You don't have to use the tools like that. They work pretty independent from each other. Please see the individual README files for more options.

### Step 1: Internationalize the code

See the code examples in this demo for how to use the `I18n` class and the formatters. Feel free to add more examples or play around with the existing.

### Step 2: Extract

Run this command to extract all current default messages (in American English) and write them to 'src/messages/en-US.json':

```bash
$ npm run messages:extract
```

The created file is the base for all translation actions and shouldn't be changed manually (see it as read-only).

### Step 3 & 4: Prepare translation and add translations

In order to prepare your messages for translation you have two options depending on how you wish to add translations:

#### With PhraseApp

If you have access to PhraseApp and wish to add translations there you can simply convert the default messages to a format PhraseApp can read:

```bash
$ npm run messages:export
```

Then go to the platform and upload the file 'en-US.json' from the 'src/phraseApp/out' directory.

After adding new locales and translations download these locale-files to the directory 'src/phraseApp/in'. Then import them to the messages directory and parse them to the correct internal format with this command:

```bash
$ npm run messages:import
```

This script will also do a merge with the default messages in that directory in order to retrieve the contexts lost in the process and add current status to the messages regarding usage in the code. **Note:** If you changed the messages in the code or added new ones or if you are not sure about this, it is the safest option to do another `message:extract` before the import.

### Within JSON files

If you don't want to use PhraseApp or just want to edit translations quickly you can do this in the 'src/messages' directory directly.

Just create a new template from the default messages file like that:

```bash
$ npm run messages:merge -- [your new locale].json
```

Then add translations to all messages with the 'MISSING' flag. To update the status or just get an overview you can run `messages:merge` any time and it will re-set the flags based on current state and show you a report in the console about the current status of your translations.

Finally don't forget to add you new locales to the 'src/messages/index.js' in order to be exported:

```javascript
import deDE from './de-DE.json';
import enUS from './en-US.json';

export default {
  'de-DE': deDE,
  'en-US': enUS
};
```

### Step 5: Use different locales

In the demo you can press the buttons to change locales. The browser's console will show warnings if translations are missing.
