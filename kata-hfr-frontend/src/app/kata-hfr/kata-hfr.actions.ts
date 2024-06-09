enum Actions {
    API_GET_CHAINE_REQUEST = 'GET CHAINE - Request',
    API_GET_CHAINE_SUCCESS = 'GET CHAINE - Success',
}

export class GetChaineRequest {
    static readonly type = Actions.API_GET_CHAINE_REQUEST;

    constructor(public readonly payload: number) {}
}

export class GetChaineSuccess {
    static readonly type = Actions.API_GET_CHAINE_SUCCESS;

    constructor(public readonly response: string) {}
}