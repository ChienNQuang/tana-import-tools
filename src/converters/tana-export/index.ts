import { TanaIntermediateFile } from "../../types/types";
import { IConverter } from "../IConverter";
import { TanaExportFile } from "./types";

export class TanaExportConverter implements IConverter {
  private summary: TanaIntermediateSummary = {
    leafNodes: 0,
    topLevelNodes: 0,
    totalNodes: 0,
    calendarNodes: 0,
    fields: 0,
    brokenRefs: 0,
  };

  convert(fileContent: string): TanaIntermediateFile | undefined{
    try {
      const file: TanaExportFile = JSON.parse(fileContent);
    } catch (error) {
      console.error('Invalid json?', error);
      return undefined;
    }
    const file: TanaIntermediateFile = {
      version: 'TanaIntermediateFile V0.1',
      summary: this.summary,
      nodes: [],
      attributes: [],
    };

    return file;
  }
}