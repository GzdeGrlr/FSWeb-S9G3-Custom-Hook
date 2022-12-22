import React, { useEffect, useState } from "react";

function LocalStorageKullan(key, initialValue) {
  // local storage'dan değeri getir
  const storedValue = window.localStorage.getItem(key);
  // storedValue yoksa initialValue'yu kullan
  const [state, setState] = useState(storedValue || initialValue);

  function setValue(value) {
    // değeri local storage'a kaydet
    window.localStorage.setItem(key, value);
    // state'i güncelle
    setState(value);
  }

  return [state, setValue];
}

export default LocalStorageKullan;
