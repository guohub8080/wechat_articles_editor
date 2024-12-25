import {useImageSize} from 'react-image-size';

const useImgSize = (url: string): {
  w: number,
  h: number,
  status: string
} => {
  const [dimensions, {loading, error}] = useImageSize(url)
  if (loading) return {w: 0, h: 0, status: "loading"}
  if (error) return {w: 0, h: 0, status: "error"}
  if (["undefined", "null"].includes(typeof dimensions?.width)) return {w: 0, h: 0, status: "loading"}
  if (["undefined", "null"].includes(typeof dimensions?.height)) return {w: 0, h: 0, status: "loading"}
  return {w: dimensions.width, h: dimensions.height, status: "success"}
}
export default useImgSize