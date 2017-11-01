
export default function(state={},action)
{
switch(action.type)
{
    case 'Get-Location':
    return action.payload.data
  
}
return state;   
}