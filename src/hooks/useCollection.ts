import { useCallback, useState } from 'react';

interface HasId {
  id: number;
}

export default function useCollection<T extends HasId>(initialCollection: T[] | (() => T[])){
  const [collection, setCollection] = useState(initialCollection);

  const addItem = useCallback((item: T) => {
    setCollection(prevCollection => [...prevCollection, item]);
  }, []);

  const removeItem = useCallback((id: number) => {
    setCollection(prevCollection => prevCollection.filter(item => id !== item.id));
  }, []);

  const updateItem = useCallback((item: T) => {
    setCollection(prevCollection => {
      const matchedIndex = prevCollection.findIndex(({ id }) => id === item.id);

      if (matchedIndex === -1) {
        return prevCollection;
      }
      return [
        ...prevCollection.slice(0, matchedIndex),
        item,
        ...prevCollection.slice(matchedIndex + 1),
      ];
    });
  }, []);

  return {
    collection,
    addItem,
    removeItem,
    updateItem,
  };
}
