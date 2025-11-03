import Option from "./Option"

// todo: fazer com que eu consiga colocar corretamente os options no select
const Select = ({selectName}:any) => {
  return (
    <select name={selectName}>
        <Option/>
    </select>
  )
}

export default Select
