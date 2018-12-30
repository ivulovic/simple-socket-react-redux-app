export function mapToEntity (payload, key){
  if(!payload || !key) return {};
  return  {
    [payload[key]] : payload
  }
}
