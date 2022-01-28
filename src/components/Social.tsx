import SocialLink from './SocialLink';

export default function Social() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around w-full p-10 md:p-20 bg-secondary">
      <div className="flex flex-col justify-center items-start w-[225px]">
        <div className="mb-10">
          <SocialLink
            href="mailto:hi@cobogo.social"
            icon="/icons/mail-icon.svg"
            placeholder="hi@cobogo.social"
          />
        </div>
        <div className="mb-10 md:mb-0">
          <SocialLink
            href="https://twitter.com/cobogosocial"
            icon="/icons/twitter-icon.svg"
            placeholder="@cobogosocial"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-[225px]">
        <div className="mb-10">
          <SocialLink
            href="https://medium.com/@cobogosocial"
            icon="/icons/medium-icon.svg"
            placeholder="@cobogosocial"
          />
        </div>
        <div className="mb-10 md:mb-0">
          <SocialLink
            href="https://github.com/cobogo-social"
            icon="/icons/github-icon.svg"
            placeholder="/cobogo-social"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-[225px]">
        <div className="mb-10">
          <SocialLink
            href="https://medium.com/@cobogosocial"
            icon="/icons/medium-icon.svg"
            placeholder="@cobogosocial"
          />
        </div>
        <SocialLink
          href="https://docs.cobogo.social"
          icon="/icons/gitbook-icon.svg"
          placeholder="docs.cobogo.social"
        />
      </div>
    </section>
  );
}
