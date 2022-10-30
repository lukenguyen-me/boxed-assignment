import { Box, Heading, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

import axiosClient from '../../services/axios';
import { User } from '../../models/User'
import ReusableTable, { ColumnConfig } from '../ReusableTable';
import GenderIcon from '../GenderIcon';

const Columns: ColumnConfig[] = [
  { key: 'id', flex: 0.5, label: 'ID', sortable: true },
  { key: 'name', flex: 2, label: 'Name', sortable: true },
  { key: 'email', flex: 2, label: 'Email', sortable: true },
  { key: 'gender', label: 'Gender', render: (row: User) => <GenderIcon gender={row.gender} /> },
  { key: 'age', label: 'Age', sortable: true },
]

const ClientSide = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<User[]>([])
  const [selectedRows, setSelectedRows] = useState<any[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axiosClient.get('https://dummyjson.com/users', { params: { limit: 100 } })
      setUsers(res.data.users.map((e: any) => ({
        id: e.id,
        age: e.age,
        gender: e.gender,
        email: e.email,
        birthday: e.birthday,
        phone: e.phone,
        name: `${e.firstName} ${e.lastName}`
      })))
    } catch (err) {
      console.log("🚀 ~ file: index.tsx ~ line 30 ~ fetchData ~ err", err)
    } finally {
      setLoading(false)
    }  
  }

  return (
    <Box w='100%' maxW='1400px' mx='auto' px='50px'>
      <Heading fontSize='24px' fontWeight='medium'>Client-side table</Heading>
      <Box mt='20px'>
        <ReusableTable
          loading={loading}
          columns={Columns}
          data={users}
          searchFields={['name']}
          onSelectRows={rows => setSelectedRows(rows)}
          useUrlQuery
        />
      </Box>
      <Box>
        {selectedRows.map(e => <Text key={e.id} fontSize='12px'>{JSON.stringify(e)}</Text>)}
      </Box>
    </Box>
  );
}

export default ClientSide;
