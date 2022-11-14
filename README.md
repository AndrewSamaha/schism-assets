# schism-assets
Development environment for schism assets

- Assets such as blender and texture files are synced to S3 with `npm run s3pull` and `npm run s3push`
- .gitignore contains some model definition file types and image files (generated from https://www.toptal.com/developers/gitignore/api/images)

# Setup
1. Dependencies (gltjsx) requires node 16, see: https://github.com/pmndrs/gltfjsx/issues/149
2. `npm i`

# Workflow
1. Create asset in blender
2. Bake your procedural textures (e.g., https://www.youtube.com/watch?v=x4mySebugl0 )
3. Export as GLFT embedded. Be intentional about the settings under **Include** and **Transform**. In most cases, you will probably need to *uncheck* **+Y Up**.
4. Use gltfjsx to create a JS component, e.g., `npx gltfjsx Tower3Baked.gltf` -> produces a file named `Tower3Baked.js`
5. Edit Tower3Baked.js to change the name of the component from `Model` to whatever (e.g., `Tower3`) and adjust any scale or rotations as needed
6. Copy the gltf to schism-ui/public and the js to a suitable component folder

# Some Common Entity Dimensions
- Human - 1 m high

# UI Standards
### Action Button Specification
- Size: 64x64 PNG
- Filenames: Pascal Case, e.g., ActionName.png, ActionName_hover.png
- Default: grayscale
- Hover: color
- How to add bevel (GIMP):
    - Filters > Decor > Add Bevel
    - Thickness: 5px (this is usually the default)

