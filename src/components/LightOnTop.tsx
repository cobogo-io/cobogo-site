import Image from 'next/image';

export default function LightOnTop() {
  return (
    <div className="absolute top-0 left-0">
      <Image
        width={573}
        height={317}
        src="/images/light.svg"
        alt="light on top"
      />
    </div>
  );
}
