import { Box, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react';

import axiosClient from '../../services/axios';
import { User } from '../../models/User'
import ReusableTable, { ColumnConfig, TableQueryParams, TableQueryResult } from '../ReusableTable';
import GenderIcon from '../GenderIcon';
import { DEFAULT_PAGE_SIZE } from '../../constants/app';

const Columns: ColumnConfig[] = [
  { key: 'id', flex: 0.5, label: 'ID' },
  { key: 'name', flex: 2, label: 'Name' },
  { key: 'email', flex: 2, label: 'Email' },
  { key: 'gender', label: 'Gender', render: (row: User) => <GenderIcon gender={row.gender} /> },
  { key: 'age', label: 'Age' },
]

const ServerSide = () => {
  const [loading, setLoading] = useState(true)
  const [selectedRows, setSelectedRows] = useState<any[]>([])

  const fetchData = async (params: TableQueryParams): Promise<TableQueryResult> => {
    try {
      setLoading(true)
      const res = await axiosClient.get(
        'https://dummyjson.com/users',
        { params: {
          limit: DEFAULT_PAGE_SIZE,
          skip: (Number(params.page)-1 || 0) * DEFAULT_PAGE_SIZE,
          q: params.search,
        } },
      )
      return {
        count: res.data.total,
        data: res.data.users.map((e: any) => ({
          id: e.id,
          age: e.age,
          gender: e.gender,
          email: e.email,
          birthday: e.birthday,
          phone: e.phone,
          name: `${e.firstName} ${e.lastName}`
        })),
      }
    } finally {
      setLoading(false)
    }  
  }

  return (
    <Box w='100%' maxW='1400px' mx='auto' px='50px'>
      <Heading fontSize='24px' fontWeight='medium'>Server-side table</Heading>
      <Box mt='20px'>
        <ReusableTable
          loading={loading}
          columns={Columns}
          onSelectRows={rows => setSelectedRows(rows)}
          useUrlQuery
          ssr
          ssrQueryFunc={fetchData}
        />
      </Box>
      <Box>
        {selectedRows.map(e => <Text key={e.id} fontSize='12px'>{JSON.stringify(e)}</Text>)}
      </Box>
    </Box>
  );
}

export default ServerSide;
