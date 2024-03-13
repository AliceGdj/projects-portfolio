export interface ProjectDataInfo {
    id: string;
    title: string;
    dateFrom: string;
    dateTo: string;
}

export interface ProjectDataContent extends ProjectDataInfo {
    contentHtml: string;
}