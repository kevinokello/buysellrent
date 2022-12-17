import React from 'react';
import { useCommonContext, useListingContext } from 'store/contexts';
import { useNavigate } from 'react-router';
import ListingGridItem from './ListingGridItem';
import { Link } from 'react-router-dom';
import ListingRowItem from './ListingRowItem';

const ListingsList = ({ link, title, subtitle, listings }) => {
  const navigate = useNavigate();
  const { deleteListing } = useListingContext();
  const { showGrid } = useCommonContext();
  const handleEditListing = (id) => {
    navigate(`/listings/edit/${id}`);
  };

  const handleDeleteListing = async (listing) => {
    if (
      window.confirm(
        `Are you sure you want to delete listing ${listing?.data?.title}`
      )
    ) {
      await deleteListing(listing);
    }
  };

  let ListingIcon = showGrid ? ListingGridItem : ListingRowItem;

  return (
    <>
      {listings && listings.length > 0 && (
        <div className='m-2 mb-6'>
          <h2 className='px-3 text-darker text-2xl mt-10 font-semibold tracking-wider'>
            {title}
          </h2>
          {subtitle && (
            <Link to={link}>
              <p className='px-3 text-sm  text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out'>
                {subtitle}...
              </p>
            </Link>
          )}
          <ul
            className={
              !showGrid
                ? 'sm:grid '
                : `sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 w-full`
            }
          >
            {listings?.map((listing) => (
              <ListingIcon
                key={listing?.id}
                id={listing?.id}
                listing={listing?.data}
                editListing={() => handleEditListing(listing?.id)}
                deleteListing={() => handleDeleteListing(listing)}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ListingsList;
