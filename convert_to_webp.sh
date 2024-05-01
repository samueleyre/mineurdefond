#!/bin/bash

# Directory to search for images (defaults to public/images if not provided)
DIRECTORY="${1:-public/images}"

# Function to convert images
convert_to_webp() {
    for img in "$DIRECTORY"/*.{jpg,png}; do
        if [ -f "$img" ]; then  # Check if file exists
            local webp="${img%.*}.webp"
            if [ ! -f "$webp" ]; then  # Check if WEBP version exists
                echo "Converting $img to $webp"
                cwebp -q 80 "$img" -o "$webp"
            else
                echo "WEBP version already exists for $img"
            fi
        fi
    done
}

# Call the conversion function
convert_to_webp
