# Release Checklist

Use this before publishing an Add-On update.

## Build

- Update pack versions.
- Verify manifest UUIDs and dependencies.
- Check required experiments.
- Test import on a clean Minecraft Bedrock install.

## Test

- Create a new world with the Add-On.
- Load an existing test world from the previous version.
- Verify items, blocks, entities, recipes, loot, and scripts.
- Test multiplayer if supported.

## Publish

- Export `.mcpack` or `.mcaddon`.
- Update the Add-On wiki page.
- Add changelog notes.
- Mark known issues clearly.
- Update download links.
