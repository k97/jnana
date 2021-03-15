import Link from 'next/link'
import { Heading, LinkBox, LinkOverlay, Text, Image, GridItem, Spacer, CloseButton, Flex, Tooltip } from "@chakra-ui/react"

type Props = {
  title: string
  coverImage: string
  excerpt: string
  slug: string
  locked: any
  sessionStatus: any
}

const WorkPreview = ({
  title,
  coverImage,
  excerpt,
  slug,
  locked,
  sessionStatus
}: Props) => {
  return (
    <Link as={`/work/${slug}`} href="/work/[slug]">
      <GridItem colSpan={6}>
        <LinkBox as="article" p="5" borderWidth="1px" borderColor="gray.100" shadow="sm" rounded="md" cursor="pointer" _hover={{ rounded: "xl", textDecoration: 'none', shadow: "2xl", borderColor: "brand.50" }}>
          <Flex>
            <Heading fontSize="2xl" mb="3" fontWeight="700" color="gray.600" textDecoration="none">
              {title}
            </Heading>
            <Spacer />
            <Tooltip label="Private project">
              <>
                {locked && !sessionStatus && (<Image src="/assets/lock.svg" htmlWidth="14px" opacity="0.65" position="relative" bottom="10px" />)}
                {locked && sessionStatus && (<Image src="/assets/unlock.svg" htmlWidth="18px" opacity="0.65" position="relative" bottom="10px" />)}
              </>
            </Tooltip>
          </Flex>
          {coverImage && <Image src={coverImage} alt={`Cover Image for ${title}`} rounded="lg" />}
          <Text fontSize="2xl" mt="4">{excerpt}</Text>
        </LinkBox>
      </GridItem>

    </Link>
  )
}

export default WorkPreview
