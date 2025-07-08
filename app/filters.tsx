
import { Flex, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export default function FilterSearch() {
  return (
    <Flex
      align="center"
      gap="8px"
      style={{
        width: '179px',
        height: '22px',
        border: '1.5px solid #686868',
        borderRadius: '6px',
        padding: '2px 8px',
        boxSizing: 'border-box',
        cursor: 'text',
      }}
    >
      <IconSearch
        size={18}
        color="#686868"
        stroke={1.5}
      />
      <Text
        fw={500}
        size="16px"
        style={{
          fontFamily: 'Satoshi Variable, sans-serif',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#686868',
          flex: 1,
          textAlign: 'center',
        }}
      >
        Search By Job Title, Role
      </Text>
    </Flex>
  );
}
