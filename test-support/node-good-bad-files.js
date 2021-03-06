module.exports = {
    goodFiles: [
        'idbkeyrange.js'
    ],
    badFiles: [
        'abort-in-initial-upgradeneeded.js',
        'close-in-upgradeneeded.js',
        'cursor-overloads.js',
        'idbcursor-advance-continue-async.js',
        'idbcursor-advance-invalid.js',
        'idbcursor-advance.js',
        'idbcursor-continue.js',
        'idbcursor-direction-index-keyrange.js',
        'idbcursor-direction-index.js',
        'idbcursor-direction-objectstore-keyrange.js',
        'idbcursor-direction-objectstore.js',
        'idbcursor-direction.js',
        'idbcursor-key.js',
        'idbcursor-primarykey.js',
        'idbcursor-reused.js',
        'idbcursor-source.js',
        'idbcursor_advance_index.js',
        'idbcursor_advance_index2.js',
        'idbcursor_advance_index3.js',
        'idbcursor_advance_index5.js',
        'idbcursor_advance_index6.js',
        'idbcursor_advance_index7.js',
        'idbcursor_advance_index8.js',
        'idbcursor_advance_index9.js',
        'idbcursor_advance_objectstore.js',
        'idbcursor_advance_objectstore2.js',
        'idbcursor_advance_objectstore3.js',
        'idbcursor_advance_objectstore4.js',
        'idbcursor_advance_objectstore5.js',
        'idbcursor_continue_index.js',
        'idbcursor_continue_index2.js',
        'idbcursor_continue_index3.js',
        'idbcursor_continue_index4.js',
        'idbcursor_continue_index5.js',
        'idbcursor_continue_index6.js',
        'idbcursor_continue_index7.js',
        'idbcursor_continue_index8.js',
        'idbcursor_continue_invalid.js',
        'idbcursor_continue_objectstore.js',
        'idbcursor_continue_objectstore2.js',
        'idbcursor_continue_objectstore3.js',
        'idbcursor_continue_objectstore4.js',
        'idbcursor_continue_objectstore5.js',
        'idbcursor_continue_objectstore6.js',
        'idbcursor_delete_index.js',
        'idbcursor_delete_index2.js',
        'idbcursor_delete_index3.js',
        'idbcursor_delete_index4.js',
        'idbcursor_delete_index5.js',
        'idbcursor_delete_objectstore.js',
        'idbcursor_delete_objectstore2.js',
        'idbcursor_delete_objectstore3.js',
        'idbcursor_delete_objectstore4.js',
        'idbcursor_delete_objectstore5.js',
        'idbcursor_iterating.js',
        'idbcursor_iterating_index.js',
        'idbcursor_iterating_index2.js',
        'idbcursor_iterating_objectstore.js',
        'idbcursor_iterating_objectstore2.js',
        'idbcursor_update_index.js',
        'idbcursor_update_index2.js',
        'idbcursor_update_index3.js',
        'idbcursor_update_index4.js',
        'idbcursor_update_index5.js',
        'idbcursor_update_index6.js',
        'idbcursor_update_index7.js',
        'idbcursor_update_index8.js',
        'idbcursor_update_objectstore.js',
        'idbcursor_update_objectstore2.js',
        'idbcursor_update_objectstore3.js',
        'idbcursor_update_objectstore4.js',
        'idbcursor_update_objectstore5.js',
        'idbcursor_update_objectstore6.js',
        'idbcursor_update_objectstore7.js',
        'idbcursor_update_objectstore8.js',
        'idbcursor_update_objectstore9.js',
        'idbdatabase_close.js',
        'idbdatabase_close2.js',
        'idbdatabase_createObjectStore-createIndex-emptyname.js',
        'idbdatabase_createObjectStore.js',
        'idbdatabase_createObjectStore10-1000ends.js',
        'idbdatabase_createObjectStore10-emptyname.js',
        'idbdatabase_createObjectStore11.js',
        'idbdatabase_createObjectStore2.js',
        'idbdatabase_createObjectStore3.js',
        'idbdatabase_createObjectStore4.js',
        'idbdatabase_createObjectStore5.js',
        'idbdatabase_createObjectStore6.js',
        'idbdatabase_createObjectStore7.js',
        'idbdatabase_createObjectStore8-parameters.js',
        'idbdatabase_createObjectStore9-invalidparameters.js',
        'idbdatabase_deleteObjectStore.js',
        'idbdatabase_deleteObjectStore2.js',
        'idbdatabase_deleteObjectStore3.js',
        'idbdatabase_deleteObjectStore4-not_reused.js',
        'idbdatabase_transaction.js',
        'idbdatabase_transaction2.js',
        'idbdatabase_transaction3.js',
        'idbdatabase_transaction4.js',
        'idbdatabase_transaction5.js',
        'idbfactory_cmp.js',
        'idbfactory_cmp2.js',
        'idbfactory_deleteDatabase.js',
        'idbfactory_deleteDatabase2.js',
        'idbfactory_deleteDatabase3.js',
        'idbfactory_deleteDatabase4.js',
        'idbfactory_open.js',
        'idbfactory_open10.js',
        'idbfactory_open11.js',
        'idbfactory_open12.js',
        'idbfactory_open2.js',
        'idbfactory_open3.js',
        'idbfactory_open4.js',
        'idbfactory_open5.js',
        'idbfactory_open6.js',
        'idbfactory_open7.js',
        'idbfactory_open8.js',
        'idbfactory_open9.js',
        'idbindex-multientry-arraykeypath.js',
        'idbindex-multientry-big.js',
        'idbindex-multientry.js',
        'idbindex_count.js',
        'idbindex_count2.js',
        'idbindex_count3.js',
        'idbindex_count4.js',
        'idbindex_get.js',
        'idbindex_get2.js',
        'idbindex_get3.js',
        'idbindex_get4.js',
        'idbindex_get5.js',
        'idbindex_get6.js',
        'idbindex_get7.js',
        'idbindex_get8.js',
        'idbindex_getAll.js',
        'idbindex_getAllKeys.js',
        'idbindex_getKey.js',
        'idbindex_getKey2.js',
        'idbindex_getKey3.js',
        'idbindex_getKey4.js',
        'idbindex_getKey5.js',
        'idbindex_getKey6.js',
        'idbindex_getKey7.js',
        'idbindex_getKey8.js',
        'idbindex_indexNames.js',
        'idbindex_openCursor.js',
        'idbindex_openCursor2.js',
        'idbindex_openCursor3.js',
        'idbindex_openKeyCursor.js',
        'idbindex_openKeyCursor2.js',
        'idbindex_openKeyCursor3.js',
        'idbindex_openKeyCursor4.js',
        'idbkeyrange-includes.js',
        'idbkeyrange_incorrect.js',
        'idbobjectstore_add.js',
        'idbobjectstore_add10.js',
        'idbobjectstore_add11.js',
        'idbobjectstore_add12.js',
        'idbobjectstore_add13.js',
        'idbobjectstore_add14.js',
        'idbobjectstore_add15.js',
        'idbobjectstore_add16.js',
        'idbobjectstore_add2.js',
        'idbobjectstore_add3.js',
        'idbobjectstore_add4.js',
        'idbobjectstore_add5.js',
        'idbobjectstore_add6.js',
        'idbobjectstore_add7.js',
        'idbobjectstore_add8.js',
        'idbobjectstore_add9.js',
        'idbobjectstore_clear.js',
        'idbobjectstore_clear2.js',
        'idbobjectstore_clear3.js',
        'idbobjectstore_clear4.js',
        'idbobjectstore_count.js',
        'idbobjectstore_count2.js',
        'idbobjectstore_count3.js',
        'idbobjectstore_count4.js',
        'idbobjectstore_createIndex.js',
        'idbobjectstore_createIndex10.js',
        'idbobjectstore_createIndex11.js',
        'idbobjectstore_createIndex12.js',
        'idbobjectstore_createIndex13.js',
        'idbobjectstore_createIndex14-exception_order.js',
        'idbobjectstore_createIndex2.js',
        'idbobjectstore_createIndex3-usable-right-away.js',
        'idbobjectstore_createIndex4-deleteIndex-event_order.js',
        'idbobjectstore_createIndex5-emptykeypath.js',
        'idbobjectstore_createIndex6-event_order.js',
        'idbobjectstore_createIndex7-event_order.js',
        'idbobjectstore_createIndex8-valid_keys.js',
        'idbobjectstore_createIndex9-emptyname.js',
        'idbobjectstore_delete.js',
        'idbobjectstore_delete2.js',
        'idbobjectstore_delete3.js',
        'idbobjectstore_delete4.js',
        'idbobjectstore_delete5.js',
        'idbobjectstore_delete6.js',
        'idbobjectstore_delete7.js',
        'idbobjectstore_deleted.js',
        'idbobjectstore_deleteIndex.js',
        'idbobjectstore_get.js',
        'idbobjectstore_get2.js',
        'idbobjectstore_get3.js',
        'idbobjectstore_get4.js',
        'idbobjectstore_get5.js',
        'idbobjectstore_get6.js',
        'idbobjectstore_get7.js',
        'idbobjectstore_getAll.js',
        'idbobjectstore_getAllKeys.js',
        'idbobjectstore_index.js',
        'idbobjectstore_openCursor.js',
        'idbobjectstore_openCursor_invalid.js',
        'idbobjectstore_openKeyCursor.js',
        'idbobjectstore_put.js',
        'idbobjectstore_put10.js',
        'idbobjectstore_put11.js',
        'idbobjectstore_put12.js',
        'idbobjectstore_put13.js',
        'idbobjectstore_put14.js',
        'idbobjectstore_put15.js',
        'idbobjectstore_put16.js',
        'idbobjectstore_put2.js',
        'idbobjectstore_put3.js',
        'idbobjectstore_put4.js',
        'idbobjectstore_put5.js',
        'idbobjectstore_put6.js',
        'idbobjectstore_put7.js',
        'idbobjectstore_put8.js',
        'idbobjectstore_put9.js',
        'idbtransaction-oncomplete.js',
        'idbtransaction.js',
        'idbtransaction_abort.js',
        'idbtransaction_objectStoreNames.js',
        'idbversionchangeevent.js',
        'idb_webworkers.js',
        'index_sort_order.js',
        'interfaces.js',
        'keygenerator-constrainterror.js',
        'keygenerator-overflow.js',
        'keygenerator.js',
        'keyorder.js',
        'keypath.js',
        'keypath_invalid.js',
        'keypath_maxsize.js',
        'key_invalid.js',
        'key_valid.js',
        'list_ordering.js',
        'objectstore_keyorder.js',
        'request_bubble-and-capture.js',
        'string-list-ordering.js',
        'transaction-create_in_versionchange.js',
        'transaction-lifetime-blocked.js',
        'transaction-lifetime-empty.js',
        'transaction-lifetime.js',
        'transaction-requestqueue.js',
        'transaction_bubble-and-capture.js',
        'value.js',
        'value_recursive.js',
        'writer-starvation.js'
    ]
};
