import { Icon } from '@chakra-ui/react'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs'

const Icons = {
  'male': BsGenderMale,
  'female': BsGenderFemale,
}

const Colors = {
  'male': 'blue',
  'female': 'red',
}

interface GenderIconProps {
  gender: string
}

const GenderIcon = (props: GenderIconProps) => {
  const { gender } = props
  if (gender === 'male' || gender === 'female') {
    return <Icon as={Icons[gender] || BsGenderFemale} color={Colors[gender]} /> 
  }

  return null
}

export default GenderIcon