# schism-assets
Development environment for schism assets

- Assets such as blender and texture files are synced to S3 with `npm run sync`
- .gitignore contains some model definition file types and image files (generated from https://www.toptal.com/developers/gitignore/api/images)

# UI Standards
### Action Button Specification
![Default Image](buildings/tower.1/CreateTower.png)
![OnHover Image](./buildings/tower.1/CreateTower_hover.png)
- Size: 64x64 PNG
- Filenames: Pascal Case, e.g., ActionName.png, ActionName_hover.png
- Default: grayscale
- Hover: color
- How to add bevel (GIMP):
    - Filters > Decor > Add Bevel
    - Thickness: 5px (this is usually the default)

