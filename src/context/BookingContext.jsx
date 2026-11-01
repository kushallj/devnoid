import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext({
  isOpen: false,
  selectedPlan: 'Starter Plan',
  openBooking: (plan = 'Starter Plan') => {},
  closeBooking: () => {},
});

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Starter Plan');

  const openBooking = (plan = 'Starter Plan') => {
    setSelectedPlan(plan);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        selectedPlan,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
