import castArray from 'lodash/castArray';
import { Ancestor, Editor } from 'slate';
import { EditorAboveOptions } from '../types/Editor.types';

/**
 * Get the block above a location (default: selection) by type.
 */
export const getAboveByType = <T extends Ancestor>(
  editor: Editor,
  types: string[] | string,
  options: Omit<EditorAboveOptions, 'match'> = {}
) => {
  types = castArray<string>(types);

  return Editor.above(editor, {
    match: (n) => types.includes(n.type as string),
    ...options,
  });
};
