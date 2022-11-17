export const TicketSearch = ({setterFunction}) => {
    return (
        <div>
            <input 
                onChange={
                    (changeEvent) => {
                        //changes state in parent component
                        setterFunction(changeEvent.target.value)
                    }
                }
            type="text" placeholder="Enter Search Terms" />
        </div>
    )
}

// setterFunction is they key in ticketcontainer.js that allows the ticketSearch component 
// access to the setSearchTerms in ticketcontainer.js 