/**
 * Created by Mac on 1/30/2016.
 */

/*
Do this on the client-side for convienence in this
lesson. Obviously wouldn't want to do this in production

this hash func is from
http://stackoverflow.com/a/7616484/1538717
 */
 function hashMe(password) {

  var hash = 0, i, chr, len;
  if (password.length === 0) return hash;
  for (i = 0, len = password.length; i < len; i++) {
    chr   = password.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
};

credentials = {'login':'Mac', 'password':hashMe('p')}


doStuff = function(){
    pwd = getVal("password")
    login = getVal("login")

    if (credentials['login'] == login && hashMe(pwd) == credentials['password'])
    {
        output("Yup")
    }
    else
    {
        output("Nope")
    }
}


