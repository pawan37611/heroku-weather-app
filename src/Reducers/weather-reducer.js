
export default function(state={},action)
{
switch(action.type)
{
   
case 'Get-Weather':
return action.payload.data
   
   
}
return state;   
}