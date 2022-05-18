import { useColorModeValue } from '@chakra-ui/react'

export const darkBg = 'hsl(207, 26%, 17%)'
export const lightBg = 'hsl(0, 0%, 98%)'
//element color
export const darkElement = 'hsl(209, 23%, 22%)'
export const lightElement = 'hsl(0, 0%, 100%)'
//text color
export const lightModeText = 'hsl(200, 15%, 8%)'
export const darkModeText = 'hsl(0, 0%, 100%)'

export const CentralTheme = () => {
    //useColorModeValue(lightElement, darkElement)
    let elementColor = useColorModeValue(lightElement, darkElement)
    let bgColor = useColorModeValue('#457B9D', 'black')
    let textColor = useColorModeValue('black', 'white')
    let borderColor = useColorModeValue('white', '#00377E')
    let shadowColor = useColorModeValue('white', '#00377E')
    return {
        elementColor, bgColor, textColor, borderColor, shadowColor
    }
}