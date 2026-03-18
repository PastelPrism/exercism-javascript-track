export function createVisitor(name, age, ticketId) {
    return { name, age, ticketId };
}

export function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor;
}

export function ticketStatus(tickets, ticketId) {
    if (!(ticketId in tickets)) {
        return 'unknown ticket id';
    }
    if (tickets[ticketId] === null) {
        return 'not sold';
    }

    return `sold to ${tickets[ticketId]}`;
}

export function simpleTicketStatus(tickets, ticketId) {

    const status = tickets[ticketId];
    if (status !== null && status !== undefined) {
        return status;
    }

    return 'invalid ticket !!!';
}


export function gtcVersion(visitor) {
    return visitor.gtc?.version;
}
