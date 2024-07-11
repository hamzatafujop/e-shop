export const formatPrice = (nb:number) => new Intl.NumberFormat('en-Us',{
  style:'currency',
  currency:'USD'
}).format(nb);
