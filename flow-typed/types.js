// @flow

declare type PersonPhoto = {
    large: string,
    medium: string,
    thumbnail: string,
}

declare type PersonName = {
    first: string,
    last: string,
    title: string,
}

declare type PersonID = {
    name: string,
    value: string,
}

declare type PersinLocation = {
    street: string,
    city: string,
    state: string,
    postcode: string,
}

declare type Person = {
    name: PersonName,
    id: PersonID,
    picture: PersonPhoto,
    location: PersinLocation,
    status?: string
}

declare interface Action<P> {
  type: string,
  payload?: P,
}

declare type VoidAction = Action<void>

declare type Stage = string
declare type StageItem = {
  id: Stage,
  title: string,
}

declare type StageEnum = {
  [string]: string
}

declare type StageList = Array<StageItem>

declare type State = {
  stages: StageList,
  crew: Person[],
  isLoading: boolean,
  error: ?Error,
}

declare type Configuration = {
  domElement: ?Element
}

// Actions

declare type CrewLoadingStartedAction = VoidAction
declare type CrewLoadingFinishedAction = Action<Person[]>
declare type CrewLoadingFailedAction = Action<Error>

declare type CrewLoadingActions = CrewLoadingStartedAction
  | CrewLoadingFinishedAction
  | CrewLoadingFailedAction

declare type SetCrewStatusAction = Action<{
  person: Person,
  status: Stage
}>

declare type Actions = CrewLoadingActions
  | SetCrewStatusAction

// Props
type EmptyProps = {||}
