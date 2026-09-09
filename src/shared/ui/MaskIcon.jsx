export default function MaskIcon({ path, className = "", style }) {
  const maskImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='${path}' fill='black'/%3E%3C/svg%3E")`;
  return (
    <span
      className={`mask-center mask-no-repeat mask-contain inline-block shrink-0 ${className}`}
      style={{ WebkitMaskImage: maskImage, maskImage, ...style }}
    />
  );
}
