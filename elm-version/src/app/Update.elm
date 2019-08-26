module Update exposing (update)

import Message exposing (Msg(..))
import Model exposing (..)

---- Update.elm <-> reducer.ts ----

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    Something payload -> 
            ({model | foo = payload}, Cmd.none)
