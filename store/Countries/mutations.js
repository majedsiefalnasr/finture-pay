export default {

    COUNTRY_CODE_MUTAIONS(state, data){
        state.country_code = data

    },
    COUNTRY_DATA_OBJECT(state, data_object){
        state.country_object = data_object
        state.default_lang = data_object.default_language
    },
    COUNTRY_NAME_MUTATIONS(state, data){
          state.country_name = data

    },
    LOGIN_RESPONSE_MUTATTIONS(state, data){
        state.login_status = data['status']
        state.access_session = data['access_session']
        state.error_message = data['msg']
    },
    SESSIONS_STATUS_MUTATIONS(state, data){
        state.session_status = data['status']
    },
    MUTATTIONS_CHECK_DATABASE_CREATED(state, data){
        state.database_created_status = data['status']
        state.get_access_session = data['access_session']

    }

  

}