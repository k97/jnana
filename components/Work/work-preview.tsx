import Link from 'next/link'
import WorkImage from './work-image'
import { Heading, LinkBox, LinkOverlay, Text, Image, GridItem } from "@chakra-ui/react"
type Props = {
  title: string
  coverImage: string
  excerpt: string
  slug: string
}

const WorkPreview = ({
  title,
  coverImage,
  excerpt,
  slug,
}: Props) => {
  return (
    <Link as={`/work/${slug}`} href="/work/[slug]">
      <GridItem colSpan={6}>
        <LinkBox as="article" p="5" borderWidth="1px" shadow="sm" rounded="md" className="work-card">
          <Heading fontSize="2xl" mb="3" fontWeight="600">
            <LinkOverlay>
              {title}
            </LinkOverlay>
          </Heading>
          {coverImage && <Image src={coverImage} alt={`Cover Image for ${title}`} rounded="lg" />}
          <Text fontSize="2xl" mt="4">{excerpt}</Text>
        </LinkBox>
      </GridItem>

    </Link>
  )
}

export default WorkPreview
