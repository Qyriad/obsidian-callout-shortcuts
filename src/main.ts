import {
	Editor,
	EditorRange,
	MarkdownFileInfo,
	MarkdownView,
	Plugin,
} from 'obsidian';

const PLUGIN = "obsidian-callout-shortcuts";

/**
 * Passes arguments to {@link console.log}, prefixed with `"obsidian-scroll-commands: "`.
 */
function log(...args: any[])
{
	return console.log(`${PLUGIN}:`, ...args);
}

/**
 * The main plugin class for obsidian-scroll-commands.
 * Registers commands in {@link ScrollCommands.onload}.
 */
export default class CalloutShortcuts extends Plugin
{
	/**
	 * Registers the commands "scroll-bottom" and "scroll-top" as editor commands.
	 */
	override async onload()
	{
		log("loading");

	}

	override onunload()
	{
		log("unloading");
	}
}
