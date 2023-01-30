import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchCategoriesStartAsync } from '../../store/categories/category.action';
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(fetchCategoriesStartAsync());
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <div className="shop-container">
      <Outlet/>
    </div>
  );
};

export default Shop;
