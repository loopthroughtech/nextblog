import { TwitterIcon } from '@icons/TwitterIcon'
import { FacebookIcon } from '@icons/FacebookIcon'

import { SocialRss } from '@components/SocialRss'
import { GhostSettings } from '@lib/ghost'

interface SocialLinkProps {
  siteUrl: string
  site: GhostSettings
}

export const SocialLinks = ({ siteUrl, site }: SocialLinkProps) => {
  const twitterUrl = '' //social links may be header
  const facebookUrl = ''

  return (
    <>
      {site.facebook && (
        <a href={facebookUrl} className="social-link social-link-fb" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FacebookIcon />
        </a>
      )}
      {site.twitter && (
        <a href={twitterUrl} className="social-link social-link-tw" target="_blank" rel="noopener noreferrer" title="Twitter">
          <TwitterIcon />
        </a>
      )}
      <SocialRss {...{ siteUrl }} />
    </>
  )
}
