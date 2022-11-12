import { useEffect, useState, useRef } from 'react';
import './App.css';
import './styles/App.scss';
import { getItems } from './api/services/sf-legacy-api.js';
import Card from './components/Card/Card.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [lastElement, setLastElement] = useState(null);
  const [selectedItems, setSelectedItems] = useState(
    localStorage.getItem('selectedItems')
      ? localStorage.getItem('selectedItems').split(',')
      : []
  );

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((n) => n + 1);
      }
    })
  );

  const loadItems = async () => {
    setLoading(true);

    let response = await getItems(pageNum);
    let all = new Set([...items, ...response.data.data]);

    setItems([...all]);
    setLoading(false);
    setTotalPages(
      response.data.metadata.totalItems / response.data.metadata.perPage
    );
    setLoading(false);
  };

  useEffect(() => {
    if (pageNum <= totalPages) {
      loadItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('selectedItems', selectedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems]);

  const seletingItem = (id) => {
    setSelectedItems((prevSelected) => {
      // if it's in, remove
      const newArray = [...prevSelected];
      if (newArray.includes(id)) {
        return newArray.filter((item) => item !== id);
        // else, add
      } else {
        newArray.push(id);
        return newArray;
      }
    });

    localStorage.setItem('selectedItems', selectedItems);
  };

  return (
    <div className='App'>
      <h1>Infinite Pagination</h1>
      <header className='App-header'>
        {items?.map((item, i) => {
          const isSelected = selectedItems?.includes(item.id);

          return i === items.length - 1 && !loading && pageNum <= totalPages ? (
            <Card
              className={isSelected ? 'selected' : ''}
              seletingItem={() => seletingItem(item.id)}
              key={`${item.id}-${i}`}
              item={item}
              ref={setLastElement}
            />
          ) : (
            <Card
              className={isSelected ? 'selected' : ''}
              seletingItem={() => seletingItem(item.id)}
              key={`${item.id}-${i}`}
              item={item}
            />
          );
        })}
      </header>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
