# Image Size Checker Script

This project includes a bash script (`scripts/check_image_sizes.sh`) for checking image file sizes in the public directory to ensure they meet size limits for optimal performance.

## Installation & Usage

- The script is located at `scripts/check_image_sizes.sh`
- Run via npm script: `npm run test:images`
- Direct execution: `bash scripts/check_image_sizes.sh`
- Help: `bash scripts/check_image_sizes.sh --help`

## How it works

- **Directory Scanning**: Searches the `public/` directory for image files
- **File Type Support**: Checks PNG, JPG, JPEG, and WebP files
- **Exclusion**: Skips images in `public/images/blog/` directory
- **Size Limit**: Enforces a maximum size of 900KB (900,000 bytes) per image
- **Exit Codes**: Returns 0 for success, 1 for oversized images

## Script Details

### Size Limits

- **Maximum file size**: 900KB (900,000 bytes)
- **Purpose**: Ensures images load quickly and don't impact page performance
- **Rationale**: Large images can slow down page load times and increase bandwidth usage

### Supported Formats

- PNG (`.png`)
- JPEG/JPG (`.jpg`, `.jpeg`)
- WebP (`.webp`)

### Excluded Directories

- `public/images/blog/` - Blog images may have different size requirements

## Usage Examples

### Basic Check

```bash
npm run test:images
# or
bash scripts/check_image_sizes.sh
```

### Help Information

```bash
bash scripts/check_image_sizes.sh --help
```

### Sample Output (Success)

```text
Checking image sizes in public/ (excluding /public/images/blog/)...

Checked 15 image(s).
All images are within the size limit.
```

### Sample Output (Failure)

```text
Checking image sizes in public/ (excluding /public/images/blog/)...

Checked 15 image(s).
The following images exceed the 900000 byte limit:
  public/images/hero-banner.jpg (1250000 bytes)
  public/images/logo-large.png (950000 bytes)

Total images exceeding limit: 2
```

## Integration with Development Workflow

### Pre-commit Hooks

Can be integrated with Husky to run automatically before commits:

```json
{
  "lint-staged": {
    "*.{png,jpg,jpeg,webp}": ["bash scripts/check_image_sizes.sh"]
  }
}
```

### CI/CD Integration

Perfect for automated pipelines:

- **GitHub Actions**: Run in CI to prevent oversized images from being merged
- **Pre-deployment**: Ensure production images meet size requirements
- **Automated reporting**: Fail builds with oversized images

### Development Workflow

- **Manual checks**: Run before committing large image changes
- **Optimization feedback**: Identify images that need compression
- **Performance monitoring**: Track image sizes over time

## Requirements

### System Dependencies

- **bash**: Shell environment
- **stat**: File information (built-in on macOS/Linux)
- **find**: File searching utility
- **awk**: Text processing (optional, for advanced usage)

### File Permissions

- Script must be executable: `chmod +x scripts/check_image_sizes.sh`

## Customization

### Changing Size Limits

Edit the `MAX_SIZE` variable in the script:

```bash
MAX_SIZE=500000  # 500KB limit
```

### Adding File Types

Modify the find command to include additional formats:

```bash
find public -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" -o -name "*.svg" \) -not -path "public/images/blog/*"
```

### Changing Excluded Directories

Modify the `-not -path` parameter:

```bash
-not -path "public/images/blog/*" -not -path "public/images/temp/*"
```

## Troubleshooting

### Common Issues

- **Permission denied**: Make script executable with `chmod +x scripts/check_image_sizes.sh`
- **Command not found**: Ensure bash and required tools are installed
- **No images found**: Check that image files exist in `public/` directory
- **Cross-platform issues**: Script uses portable `stat` commands for macOS and Linux

### Performance Considerations

- **Large directories**: Script may be slow with thousands of images
- **Network drives**: Avoid running on network-mounted directories
- **Caching**: Consider caching results for CI/CD environments

## Best Practices

- **Run regularly**: Include in pre-commit hooks and CI pipelines
- **Optimize images**: Use tools like ImageOptim, TinyPNG, or WebP conversion
- **Monitor sizes**: Track image sizes over time to identify trends
- **Set appropriate limits**: Balance quality vs. performance based on your needs

## Security

- Script only reads file metadata (sizes), doesn't access file contents
- No external network calls or dependencies
- Safe to run on any development or CI environment

---

For more details on image optimization, see [web.dev image optimization guide](https://web.dev/learn/images/).
