export type WorkspaceId = string;
export type DocId = string;

export type TanaExportFile = {
  formatVersion: number;
  docs: TanaExportDoc[];
  workspaces: Record<WorkspaceId, string>;
  lastTxid: number;
  lastFbKey: string;
  optimisticTransIds: number[];
  currentWorkspaceId: WorkspaceId;
};

export type TanaExportDoc = {
  id: DocId;
  props: {
    created: number;
    name?: string;
    description?: string;
    _docType?: "tagDef" | "tuple" | "command" | "metanode" | "associatedData" | "codeblock" | "journalPart";
    _ownerId: DocId;
    _metaNodeId?: DocId;
  };
  touchCounts?: [number, number, number];
  modifiedTs?: [number, number, number];
  children?: DocId[];
}