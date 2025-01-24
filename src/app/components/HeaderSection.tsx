import { Box, Text, VStack, Container } from "@chakra-ui/react";

export function HeaderSection() {
  return (
    <Container centerContent maxWidth="100%" padding={0}>
      <VStack width="100%">
        <Box height={["59px", null, "80px"]} textAlign="left" width="100%">
          {/* 최상단 헤더 */}
          <Box height="35px" ml="16px" mt={["12px", null, "22px"]}>
            {/* 왜 ㅊ 글자 피그마랑 모양이 다르지 */}
            <Text
              fontSize={["24px", null, "24px"]}
              color="#1e1e1e"
              fontWeight="bold"
              fontFamily="Be Vietnam"
            >
              옮겨볼까
            </Text>
          </Box>
        </Box>
        {/* 원래 mb 48px 인데 마지막줄 한글자 추가되어서 마진 24px 로 수정 */}
        <VStack textAlign="center" mb="24px">
          {/* 구분선 */}
          <Box
            width="100vw"
            height={["2px", null, "3px"]}
            bg="#000000"
            mb={["13px", null, "40px"]}
            mt={"-8px"}
          />
          {/* 초록 텍스트박스 */}
          <Box
            bg="linear-gradient(90deg, #979fa9, #212121)"
            width={["295px", null, "486px"]}
            height={["80px", null, "60px"]}
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb="16px"
            mx="auto"
          >
            <Box
              fontSize={["16px", null, "20px"]}
              fontWeight="600"
              color="white"
              textAlign="center"
              lineHeight={["24px", null, "28px"]}
            >
              {/* 모바일 화면 */}
              <Text display={["block", null, "none"]}>
                [선착순 50명] <br /> 사전 예약하고 무료로 먼저 사용해보세요!
              </Text>
              {/* 데스크탑 화면 */}
              <Text display={["none", "none", "block"]}>
                [선착순 50명] 사전 예약하고 무료로 먼저 사용해보세요!
              </Text>
            </Box>
          </Box>

          {/* 굵은 글씨 소개 */}
          <Box
            fontSize={["28px", null, "40px"]}
            width={["286px", null, "575px"]}
            fontWeight="700"
            color="black"
            lineHeight={["36px", null, "52px"]}
            // mb="8px"
          >
            {/* 모바일 화면 */}
            <Text display={["block", "block", "none"]}>
              당신의 공간을 더 특별하게
              <br />
              만드는 실시간 3D 가상
              <br />
              인테리어 시뮬레이터
            </Text>

            {/* 데스크탑 화면 */}
            <Text display={["none", "none", "block"]}>
              당신의 공간을 더 특별하게 만드는
              <br />
              실시간 3D 가상 인테리어 시뮬레이터
            </Text>
          </Box>

          {/* 세부 설명 */}
          <Box
            fontSize={["16px", null, "16px"]}
            width={["295px", null, "660px"]}
            lineHeight="24px"
            color="#656565"
          >
            {/* 모바일 화면 */}
            <Text display={["block", "block", "none"]}>
            우리는 시뮬 화면에 자신의 객관적인 시선을 경험하고, 그에 맞는 맞춤형 솔루션을 제공합니다.
            또한, 다양한 사용자들과 공간을 공유하며 더 나은 아이디어를 발견할 수 있도록 돕습니다.
            </Text>
            {/* 데스크탑 화면 */}
            <Text display={["none", "block", "block"]}>
              우리는 시뮬 화면에 자신의 객관적인 시선을 경험하고, 그에 맞는 맞춤형 솔루션을 제공합니다.
              <br />
              또한, 다양한 사용자들과 공간을 공유하며 더 나은 아이디어를 발견할 수 있도록 돕습니다.
            </Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
}
