/**
 * История для оценки.
 */
export interface Story {
  id?: number;
  /**
   * Заголовок истории.
   */
  title: string;
  /**
   * Основной текст истории
   */
  body: string;
  /**
   * Позиция в списке историй
   */
  position: number;
}
