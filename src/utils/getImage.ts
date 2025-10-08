const allImages = import.meta.glob("../assets/**/*.{png,jpg,svg,avif}", {
  eager: true,
  as: "url",
});

interface AssetParams {
  type: string;
  id?: string;
  extension?: string;
}

export function getAssetUrl({
  type,
  id,
  extension = "png",
}: AssetParams): string | null {
  if (!id) {
    return null;
  }

  const imagePath = `../assets/${type}/${id}.${extension}`;

  return allImages[imagePath] || null;
}
