# schism-assets
Development environment for schism assets

- Assets such as blender and texture files are synced to S3 with `npm run s3pull` and `npm run s3push`
- .gitignore contains some model definition file types and image files (generated from https://www.toptal.com/developers/gitignore/api/images)

# Setup
1. Dependencies (gltjsx) requires node 16, see: https://github.com/pmndrs/gltfjsx/issues/149
2. `npm i`

# Repo Layout
- root
    - dev
        - assets
            - buildings
                - base
                    - base.blend / base.bbmodel
                    - base.gltf
                    - createBase.png
                    - createBase_hover.png
            - character
            - resources
            - textures
            - ui
  - staging (created with `npm run stage:assets`)

# Blender Workflow
1. Create asset in blender
2. Bake your procedural textures (e.g., https://www.youtube.com/watch?v=x4mySebugl0 )
    1. Create a working UV map
        1. While in Object Mode, select the object
        1. press TAB to enter Edit Mode
        1. Press A to select all the faces
        1. Bring up the UV Editor
        1. Press U and select Smart UV Project - choose an island margin of 0.05
    1. Create a new texture to store the result of your bake
        1. Select your object
        1. Open the shader view/window
        1. Add an image texture: Add -> Texture -> Image Texture. This will add an image texture node to the view, but the node will not be connected to anything (this is normal and fine).
        1. In the image texture node you just created, click on New.
        1. Choose a descriptive name
    1. Bake your texture
        1. Select Render Properties
        1. Choose the Cycles Render Engine
        1. Choose your Sampling / Render: 32 works well
        1. Performance / Thread Mode: Auto Detect
        1. Bake / Bake Type: Diffuse
        1. Turn off Direct and Indirect lighting; you only need color
        1. Make sure your object is selected in the object editor, your texture node is selected in the shader view, and then click Bake

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

