import { all } from 'redux-saga/effects'
import authSaga from '../features/auth/authSaga'
import cartSaga from '../features/cart/cartSaga'
import menuSaga from '../features/menu/menuSaga'
import orderSaga from '../features/order/orderSaga'
import billingSaga from '../features/billing/billingSaga'
import adminSaga from '../features/admin/adminSaga'
import notificationsSaga from '../features/notifications/notificationsSaga'
import inventorySaga from '../features/inventory/inventorySaga'
import promoSaga from '../features/promo/promoSaga'
import reviewSaga from '../features/review/reviewSaga'

export default function* rootSaga() {
  yield all([
    authSaga(),
    cartSaga(),
    menuSaga(),
    orderSaga(),
    billingSaga(),
    adminSaga(),
    notificationsSaga(),
    inventorySaga(),
    promoSaga(),
    reviewSaga(),
  ])
}