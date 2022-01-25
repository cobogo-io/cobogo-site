import SocialLink from './SocialLink';

export default function Social() {
  return (
    <section className="flex flex-wrap flex-col items-center md:justify-between w-full py-5 md:py-10 px-5 md:px-32 bg-secondary">
      <div className="flex w-full flex-col md:flex-row justify-between md:mb-8">
        <SocialLink
          href="mailto:hi@cobogo.social"
          icon="/icons/mail-icon.svg"
          placeholder="hi@cobogo.social"
        />
        <SocialLink
          href="https://medium.com/@cobogosocial"
          icon="/icons/medium-icon.svg"
          placeholder="@cobogosocial"
        />
        <SocialLink
          href="https://t.me/cobogosocial"
          icon="/icons/telegram-icon.svg"
          placeholder="/cobogosocial"
        />
      </div>

      <div className="flex w-full flex-col md:flex-row justify-between">
        <SocialLink
          href="https://twitter.com/cobogosocial"
          icon="/icons/twitter-icon.svg"
          placeholder="@cobogosocial"
        />
        <SocialLink
          href="https://github.com/cobogo-social"
          icon="/icons/github-icon.svg"
          placeholder="/cobogo-social"
        />
        <SocialLink
          href="https://docs.cobogo.social/"
          icon="/icons/gitbook-icon.svg"
          placeholder="docs.cobogo.social"
        />
      </div>
    </section>
  );
}
